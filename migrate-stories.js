const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all stories files
const storiesFiles = execSync('find src/components -name "stories.tsx"', { encoding: 'utf-8' })
  .trim()
  .split('\n')
  .filter(Boolean);

console.log(`Found ${storiesFiles.length} stories files to migrate\n`);

storiesFiles.forEach((file) => {
  console.log(`Migrating: ${file}`);
  
  let content = fs.readFileSync(file, 'utf-8');
  
  // Replace import statement
  content = content.replace(
    /import\s+{\s*Story,\s*Meta\s*}\s+from\s+['"]@storybook\/react['"]/g,
    "import type { Meta, StoryObj } from '@storybook/react'"
  );
  
  // Find component name from default export
  const componentMatch = content.match(/component:\s*(\w+)/);
  const componentName = componentMatch ? componentMatch[1] : null;
  
  if (!componentName) {
    console.log(`  ⚠️  Could not find component name, skipping`);
    return;
  }
  
  // Find Props type if exists
  const propsMatch = content.match(new RegExp(`import.*${componentName}.*{\\s*(\\w+Props)\\s*}`, 's')) ||
                     content.match(new RegExp(`export.*type\\s+(\\w+Props)`, 's'));
  const propsType = propsMatch ? propsMatch[1] : 'any';
  
  // Replace Meta type
  content = content.replace(
    /}\s+as\s+(unknown\s+as\s+)?Meta(<\w+>)?/g,
    `} satisfies Meta<typeof ${componentName}>`
  );
  
  // Replace Story<PropsType> with StoryObj
  content = content.replace(
    /export\s+const\s+(\w+):\s*Story<\w+>\s*=\s*\(args:?\s*\w*\)\s*=>\s*</g,
    'export const $1: StoryObj<typeof ' + componentName + '> = {\n  render: (args) => <'
  );
  
  // Replace Story = (args) => with StoryObj
  content = content.replace(
    /export\s+const\s+(\w+):\s*Story\s*=\s*\(args:?\s*\w*\)\s*=>\s*</g,
    'export const $1: StoryObj<typeof ' + componentName + '> = {\n  render: (args) => <'
  );
  
  // Close render function and move args
  content = content.replace(
    /render:\s*\(args\)\s*=>\s*<([^>]+)>\s*\n\n(\w+)\.args\s*=\s*({[\s\S]*?})/gm,
    (match, component, storyName, args) => {
      return `render: (args) => <${component}>,\n  args: ${args}\n}`;
    }
  );
  
  // Handle stories without args
  content = content.replace(
    /render:\s*\(args\)\s*=>\s*<([^>]+)>\s*$/gm,
    'render: (args) => <$1>\n}'
  );
  
  fs.writeFileSync(file, content, 'utf-8');
  console.log(`  ✅ Migrated successfully`);
});

console.log(`\n✅ Migration complete! Migrated ${storiesFiles.length} files`);
