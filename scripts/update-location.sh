#!/bin/sh

LOCATION_NAME=""
LOCATION_ID=""

#
# Enter Location Name
#
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


#
# Confirmation
#
echo ""
echo ""
echo "##############################"
echo ""
echo 🔑  $LOCATION_NAME".happyfeed.io – Is this the funnel you want to update?"
echo ""
echo "##############################"
echo ""
echo ""
echo ""
read -r -p "Yes [y/N] " response
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
echo "Uploading bucket.."
echo "##############################"
echo ""
aws s3 --profile default cp dist s3://$LOCATION_NAME.happyfeed.io --recursive



#
# Enter Location ID
#


echo "All done!"