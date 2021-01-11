# #!/bin/sh

LOCATION_NAME=""
LOCATION_HOST="happyfeed.io"
LOCATION_ID=""
# var = argv[1]
# server = argv[2]

# #
# # Enter Location Name
# #
while [[ -z $LOCATION_NAME ]]
do
  echo ""
  echo "##############################"
  echo ""
  echo "Enter Location Name: ###-###.happyfeed.io"
  echo ""
  echo "##############################"
  echo ""
  echo "Eg. 'brandloyal' for -> 🔑 brandloyal.happyfeed.io"
  echo ""
  read -r -p "> " response

  LOCATION_NAME=$response
  echo $response".happyfeed.io"
  echo 0 
done


# #
# # Confirmation
# #

echo ""
echo ""
echo "##############################"
echo ""
echo 🔑  $LOCATION_NAME".happyfeed.io – Is this correct?"
echo ""
echo "##############################"
echo ""
echo ""
echo ""
read -r -p "Is it set? [y/N] " response
response=$(awk '{ print tolower($0) }' <<< $response)
if [[ ! $response =~ ^(yes|y)$ ]]; then
  echo "Exiting ...💥"
  exit 0
fi


# Get Json ID's
echo "Define JSON ID's"
########
TARGET_ID_BUILT="S3-Website-$LOCATION_NAME.$LOCATION_HOST.s3-website.us-east-2.amazonaws.com"
DOMAIN_NAME_BUILT="$LOCATION_NAME.$LOCATION_HOST.s3-website.us-east-2.amazonaws.com"
ORIGIN_ID_BUILT="S3-Website-$LOCATION_NAME.$LOCATION_HOST.s3-website.us-east-2.amazonaws.com"
echo "$TARGET_ID_BUILT"
echo "$DOMAIN_NAME_BUILT"
echo "$ORIGIN_ID_BUILT"

echo "$LOCATION_NAME"

echo "Creating Cloud Distribution Plan"
echo "..."
echo ".."
echo "."
tmp=$(mktemp)
jq --arg dnb "$DOMAIN_NAME_BUILT" \
   --arg origin "$ORIGIN_ID_BUILT" \
   --arg target "$TARGET_ID_BUILT" \
   '.Origins.Items[0] |= ( .DomainName = $dnb | .Id = $origin )' \
distconfig.json > "$tmp" && mv "$tmp" distconfig.json

jq --arg target "$TARGET_ID_BUILT" \
  '.DefaultCacheBehavior.TargetOriginId = $target' \
distconfig.json > "$tmp" && mv "$tmp" distconfig.json

jq --arg s3 "$LOCATION_NAME.$LOCATION_HOST" \
  '.CallerReference = $s3' \
distconfig.json > "$tmp" && mv "$tmp" distconfig.json
########

aws cloudfront --profile default create-distribution --distribution-config file://distconfig.json

echo "All done!"