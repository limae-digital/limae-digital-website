# Version Auto-Update Hook

This directory contains git hooks that automatically update the project version on each commit.

## Setup

Run this command once to enable the hooks:

```bash
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
chmod +x .githooks/update-version.sh
```

## How it works

- Each time you run `git commit`, the pre-commit hook triggers
- The `update-version.sh` script increments the patch version (e.g., 0.1.0 → 0.1.1)
- It updates both `package.json` and `src/components/Footer.tsx`
- The updated files are automatically staged for commit

## Version Format

The script uses semantic versioning: `MAJOR.MINOR.PATCH`
- Only the PATCH number increments automatically
- To change MAJOR or MINOR manually, edit `package.json` and `src/components/Footer.tsx` before committing

## Note for Windows Users

If you're using Windows with PowerShell or Git Bash:
- Git Bash: These hooks should work as-is
- PowerShell: You may need to use a `.ps1` version instead, or convert the scripts to batch (`.bat`)
