# MCP Installation Script for paskomichal-next project (PowerShell)
# Run this script to install all required MCP servers on Windows

Write-Host "🚀 Installing MCP servers for paskomichal-next..." -ForegroundColor Green

# Install all required MCP packages globally
Write-Host "📦 Installing MCP packages..." -ForegroundColor Yellow

$packages = @(
    "@upstash/context7-mcp",
    "@z503722728/mcp-knowledge-graph",
    "@modelcontextprotocol/server-filesystem", 
    "git-mcp-server",
    "@magicuidesign/mcp",
    "firecrawl-mcp",
    "@modelcontextprotocol/server-sequential-thinking",
    "@jetbrains/mcp-proxy"
)

foreach ($package in $packages) {
    Write-Host "Installing $package..." -ForegroundColor Cyan
    npm install -g $package
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ $package installed successfully!" -ForegroundColor Green
    } else {
        Write-Host "❌ Failed to install $package" -ForegroundColor Red
    }
}

Write-Host "✅ MCP packages installation completed!" -ForegroundColor Green

Write-Host "`n📝 Next steps:" -ForegroundColor Yellow
Write-Host "1. Update your Claude Desktop config file:"
Write-Host "   Location: $env:APPDATA\Claude\claude_desktop_config.json"
Write-Host "2. Copy the MCP configuration from this project"
Write-Host "3. Update .env file with your API keys"
Write-Host "4. ⚠️  IMPORTANT: Use ABSOLUTE paths in MCP config:"
Write-Host "   - filesystem: Full path to src/, public/ directories"
Write-Host "   - git: Full path to your project root"
Write-Host "5. Restart Claude Desktop"
Write-Host "6. Test MCP servers with: @filesystem list src/"

Write-Host "`n🎯 Installation complete! Check MCP-README.md for full documentation." -ForegroundColor Green

# Optional: Check if Claude Desktop is running and offer to restart
$claudeProcess = Get-Process -Name "Claude" -ErrorAction SilentlyContinue
if ($claudeProcess) {
    $restart = Read-Host "`nClaude Desktop is running. Restart it now to load MCP servers? (y/n)"
    if ($restart -eq "y" -or $restart -eq "Y") {
        Write-Host "Stopping Claude Desktop..." -ForegroundColor Yellow
        Stop-Process -Name "Claude" -Force
        Start-Sleep -Seconds 2
        Write-Host "Please manually restart Claude Desktop to load MCP servers." -ForegroundColor Green
    }
}
