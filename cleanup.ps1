Write-Host "🚀 Cleaning Next.js files, keep only static site..."

# 進入專案資料夾 (假設你在 Family-Fun-HK 資料夾)
Set-Location -Path $PSScriptRoot

# 刪除 Next.js 殘留資料夾
$folders = @(".next", "node_modules", "app", "components", "lib")
foreach ($f in $folders) {
    if (Test-Path $f) {
        Remove-Item -Recurse -Force $f
        Write-Host "Deleted folder: $f"
    }
}

# 刪除 Next.js 配置檔案
$files = @(
    "package.json",
    "package-lock.json",
    "tailwind.config.js",
    "postcss.config.js",
    "tsconfig.json",
    "next.config.js",
    "app\globals.css"
)
foreach ($f in $files) {
    if (Test-Path $f) {
        Remove-Item -Force $f
        Write-Host "Deleted file: $f"
    }
}

Write-Host "✅ Cleanup done. Only keep:"
Write-Host "  public/index.html"
Write-Host "  public/admin.html"
Write-Host "  public/styles.css"
Write-Host "  vercel.json"
