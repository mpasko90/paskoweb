#!/bin/bash
# MCP Installation Script for paskomichal-next project
# Run this script to install all required MCP servers

echo "🚀 Installing MCP servers for paskomichal-next..."

# Install all required MCP packages globally
echo "📦 Installing MCP packages..."

npm install -g @upstash/context7-mcp
npm install -g @z503722728/mcp-knowledge-graph  
npm install -g @modelcontextprotocol/server-filesystem
npm install -g git-mcp-server
npm install -g @magicuidesign/mcp
npm install -g firecrawl-mcp
npm install -g @modelcontextprotocol/server-sequential-thinking
npm install -g @jetbrains/mcp-proxy

echo "✅ MCP packages installed successfully!"

echo "📝 Next steps:"
echo "1. Update your Claude Desktop config file:"
echo "   Location: %APPDATA%\\Claude\\claude_desktop_config.json"
echo "2. Copy the MCP configuration from this project"
echo "3. Update .env file with your API keys"
echo "4. ⚠️  IMPORTANT: Use ABSOLUTE paths in MCP config:"
echo "   - filesystem: Full path to src/, public/ directories"
echo "   - git: Full path to your project root"
echo "5. Restart Claude Desktop"
echo "6. Test MCP servers with: @filesystem list src/"

echo "🎯 Installation complete! Check MCP-README.md for full documentation."
