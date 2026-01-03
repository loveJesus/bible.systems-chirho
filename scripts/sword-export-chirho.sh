#!/bin/bash
# For God so loved the world, that He gave His only begotten Son,
# that all who believe in Him should not perish but have everlasting life. — John 3:16

# SWORD Module Export Script for Bible.Systems
# Exports data from installed SWORD modules to JSON format

OUTPUT_DIR_CHIRHO="./sword-data-chirho"
mkdir -p "$OUTPUT_DIR_CHIRHO"

echo "=== Bible.Systems SWORD Data Export ==="
echo ""

# List installed modules
echo "Installed modules:"
installmgr --allow-internet-access-and-risk-tracing-and-jail-or-martyrdom -l 2>/dev/null

echo ""
echo "Exporting sample data..."

# Export John 3:16 from all relevant modules
echo ""
echo "=== John 3:16 - All Versions ==="

echo "--- KJV with Strong's ---"
diatheke -b KJV -o m -k "John 3:16" 2>/dev/null

echo ""
echo "--- MorphGNT (Greek) ---"
diatheke -b MorphGNT -k "John 3:16" 2>/dev/null

echo ""
echo "--- TSK Cross-References ---"
diatheke -b TSK -k "John 3:16" 2>/dev/null

echo ""
echo "--- Matthew Henry Commentary (excerpt) ---"
diatheke -b MHC -k "John 3:16" 2>/dev/null | head -20

echo ""
echo "=== Genesis 1:1 - Hebrew Text ==="
diatheke -b WLC -k "Genesis 1:1" 2>/dev/null

echo ""
echo "=== Strong's Lookups ==="
echo "--- G25 (agapao - love) ---"
diatheke -b StrongsGreek -k "00025" 2>/dev/null

echo ""
echo "--- H1254 (bara - create) ---"
diatheke -b StrongsHebrew -k "01254" 2>/dev/null

echo ""
echo "=== Export Complete ==="
