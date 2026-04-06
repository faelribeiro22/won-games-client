# Fix: process is not defined - Empty Story

## Problema
O story do componente Empty (e possivelmente outros) apresentava o erro:
```
process is not defined
```

## Causa
O Vite não possui a variável global `process` que existe no Node.js. Componentes que usam recursos do Next.js (como `Link`) ou outras dependências que esperam `process.env` disponível quebram no ambiente do Storybook com Vite.

## Solução
Adicionado polyfill para `process.env` na configuração do Vite no `.storybook/main.ts`:

```typescript
viteFinal: async (config) => {
  return mergeConfig(config, {
    plugins: [react()],
    resolve: {
      alias: { /* ... */ }
    },
    define: {
      'process.env': {}  // ← ADICIONADO
    }
  })
}
```

## Resultado
✅ Story Empty funcionando perfeitamente  
✅ Todos os 8 stories testados passando:
- button--basic
- button--with-icon  
- logo--default
- heading--default
- textfield--default
- **empty--default** ← corrigido
- banner--default
- gamecard--default

## Commits
```
fix: add process.env polyfill for Vite compatibility
```

## Notas
Este é um problema comum ao migrar de Webpack (que possui shims automáticos) para Vite (que é mais explícito). A solução define `process.env` como um objeto vazio, suficiente para a maioria dos casos no Storybook.
