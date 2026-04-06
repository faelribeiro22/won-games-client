#!/bin/bash

echo "🔍 Testando Storybook..."
echo ""

# Verificar se o Storybook está rodando
if ! curl -s http://localhost:6006 > /dev/null 2>&1; then
    echo "❌ Storybook não está rodando em http://localhost:6006"
    exit 1
fi

echo "✅ Storybook está respondendo"
echo ""

# Testar alguns stories específicos
stories=(
    "button--basic"
    "button--with-icon"
    "logo--default"
    "heading--default"
    "textfield--default"
    "empty--default"
    "banner--default"
    "gamecard--default"
)

echo "📚 Testando stories individuais:"
errors=0
for story in "${stories[@]}"; do
    response=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:6006/iframe.html?viewMode=story&id=$story")
    if [ "$response" = "200" ]; then
        echo "  ✅ $story"
    else
        echo "  ❌ $story (HTTP $response)"
        ((errors++))
    fi
done

echo ""
if [ $errors -eq 0 ]; then
    echo "🎉 Todos os testes passaram!"
else
    echo "⚠️  $errors story(s) com problemas"
    exit 1
fi
