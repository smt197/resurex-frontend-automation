#!/bin/bash
# Script Linux/Mac pour migrer un module existant
# Usage: ./scripts/migrate-module.sh <module-name>

if [ -z "$1" ]; then
    echo ""
    echo "❌ Module name is required!"
    echo ""
    echo "Usage: ./scripts/migrate-module.sh <module-name>"
    echo "Example: ./scripts/migrate-module.sh users"
    echo ""
    exit 1
fi

node scripts/migrate-module.js "$1"
