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

echo ""
echo "####################"
echo "Location Checklist.."
echo ""
echo ""
echo "##############################"
echo ""
echo "Is the 🗒️ ️policy.json name changed?"
echo ""
echo "##############################"
echo ""
echo ""
echo ""
read -r -p "Is it changed? [y/N] " response
response=$(awk '{ print tolower($0) }' <<< $response)
if [[ ! $response =~ ^(yes|y)$ ]]; then
  echo "Exiting ...💥"
  exit 0
fi

echo ""
echo ""
echo "##############################"
echo ""
echo "Is the location ID 🏪 set?"
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

echo ""
echo ""
echo "##############################"
echo ""
echo "Is the SMS link correct? 👍"
echo ""
echo "##############################"
echo ""
echo ""
echo ""
read -r -p "Yeah bro 👍 [y/N] " response
response=$(awk '{ print tolower($0) }' <<< $response)
if [[ ! $response =~ ^(yes|y)$ ]]; then
  echo "Exiting ...💥"
  exit 0
fi

echo ""
echo ""
echo "##############################"
echo ""
echo "Is this funnels branding 💯 good to go?"
echo ""
echo "##############################"
echo ""
echo ""
echo ""
read -r -p "Is it fresh? 💯 [y/N] " response
response=$(awk '{ print tolower($0) }' <<< $response)
if [[ ! $response =~ ^(yes|y)$ ]]; then
  echo "Exiting ...💥"
  exit 0
fi

echo ""
echo "##############################"
echo "Building Dist Folder..."
echo "##############################"
echo ""
yarn run generate


echo ""
echo "##############################"
echo "Creating bucket & setting policies.."
echo "##############################"
echo ""

echo $LOCATION_NAME.$HOST_LOCATION

# #
# # Setup Bucket
# #

aws s3api --profile default create-bucket --bucket $LOCATION_NAME.happyfeed.io --region us-east-2 --create-bucket-configuration LocationConstraint=us-east-2
aws s3 --profile default website s3://$LOCATION_NAME.happyfeed.io/ --index-document index.html --error-document index.html
aws s3api --profile default put-bucket-versioning --bucket $LOCATION_NAME.happyfeed.io --versioning-configuration Status=Enabled


# build policy 

LOCATION_POLICY="arn:aws:s3:::$LOCATION_NAME.$LOCATION_HOST/*"

temp_policy=$(mktemp)
jq --arg policy "$LOCATION_POLICY" \
  '.Statement[0].Resource = $policy' \
policy.json > "$temp_policy" && mv "$temp_policy" policy.json

aws s3api --profile default put-bucket-policy --bucket $LOCATION_NAME.happyfeed.io --policy file://policy.json

echo ""
echo "##############################"
echo "Uploading bucket.."
echo "##############################"
echo ""
aws s3 --profile default cp dist s3://$LOCATION_NAME.happyfeed.io --recursive

# # open distconfig.json
# jq distconfig.json

# read in JSON object
# replace JSON values
# write to file disttemp.json

#
# Enter Location ID
#

# # Get Json ID's
# echo "Define JSON ID's"
# ########
# TARGET_ID_BUILT="S3-Website-$LOCATION_NAME.$LOCATION_HOST.s3-website.us-east-2.amazonaws.com"
# DOMAIN_NAME_BUILT="$LOCATION_NAME.$LOCATION_HOST.s3-website.us-east-2.amazonaws.com"
# ORIGIN_ID_BUILT="S3-Website-$LOCATION_NAME.$LOCATION_HOST.s3-website.us-east-2.amazonaws.com"
# echo "$TARGET_ID_BUILT"
# echo "$DOMAIN_NAME_BUILT"
# echo "$ORIGIN_ID_BUILT"

# echo "$LOCATION_NAME"

# echo "Creating Cloud Distribution Plan"
# echo "..."
# echo ".."
# echo "."
# tmp=$(mktemp)
# jq --arg dnb "$DOMAIN_NAME_BUILT" \
#    --arg origin "$ORIGIN_ID_BUILT" \
#    --arg target "$TARGET_ID_BUILT" \
#    '.Origins.Items[0] |= ( .DomainName = $dnb | .Id = $origin )' \
# distconfig.json > "$tmp" && mv "$tmp" distconfig.json

# jq --arg target "$TARGET_ID_BUILT" \
#   '.DefaultCacheBehavior.TargetOriginId = $target' \
# distconfig.json > "$tmp" && mv "$tmp" distconfig.json

# jq --arg s3 "$LOCATION_NAME.$LOCATION_HOST" \
#   '.CallerReference = $s3' \
# distconfig.json > "$tmp" && mv "$tmp" distconfig.json
# ########

# aws cloudfront --profile default create-distribution --distribution-config file://distconfig.json

echo "All done!"