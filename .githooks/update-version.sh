#!/bin/bash
# This script automatically increments the version number on each git commit
# Install by running: chmod +x .githooks/update-version.sh && git config core.hooksPath .githooks
PACKAGE_FILE="package.json"
FOOTER_FILE="src/components/Footer.tsx"
# Extract current version from package.json
CURRENT_VERSION=$(grep '"version"' "$PACKAGE_FILE" | head -1 | sed 's/.*"version": "\([^"]*\)".*/\1/')
# Split version into parts
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"
# Increment patch version
PATCH=$((PATCH + 1))
NEW_VERSION="$MAJOR.$MINOR.$PATCH"
echo "Updating version from $CURRENT_VERSION to $NEW_VERSION"
# Update package.json
sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/g" "$PACKAGE_FILE"
# Stage the updated files
git add "$PACKAGE_FILE"
echo "✅ Version updated to $NEW_VERSION"
