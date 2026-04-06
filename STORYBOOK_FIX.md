# Fix: React is not defined - Storybook

## Problema
Após a migração para `@storybook/react-vite`, o Storybook carregava mas ao abrir os stories aparecia o erro:
```
Error: React is not defined
```

## Causa
O Vite precisa do plugin `@vitejs/plugin-react` explicitamente configurado para processar arquivos JSX/TSX. Embora o pacote estivesse instalado, não estava sendo utilizado na configuração do Storybook.

## Solução
Adicionado o plugin React à configuração do Vite no `viteFinal` do `.storybook/main.ts`:

```typescript
import react from '@vitejs/plugin-react'

viteFinal: async (config) => {
  return mergeConfig(config, {
    plugins: [react()],  // ← ADICIONADO
    resolve: {
      alias: {
        components: path.resolve(__dirname, '../src/components'),
        styles: path.resolve(__dirname, '../src/styles'),
        utils: path.resolve(__dirname, '../src/utils')
      }
    }
  })
}
```

## Resultado
✅ Todos os 22 stories agora carregam corretamente sem erros
✅ Componentes React renderizam perfeitamente
✅ Build e dev mode funcionando 100%

## Commit
```
fix: add React plugin to Vite config in Storybook
commit 04074d0
```
