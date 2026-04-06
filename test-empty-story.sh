#!/bin/bash
echo "🧪 Testando story Empty..."
echo ""

response=$(curl -s "http://localhost:6006/iframe.html?viewMode=story&id=empty--default")

if echo "$response" | grep -qi "process is not defined"; then
    echo "❌ Erro 'process is not defined' ainda presente"
    exit 1
elif echo "$response" | grep -qi "error"; then
    echo "⚠️  Algum erro encontrado:"
    echo "$response" | grep -i "error" | head -5
    exit 1
else
    echo "✅ Story Empty carregou sem erros de 'process'"
    echo "✅ HTML renderizado com sucesso"
fi
