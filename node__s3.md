need to install multer
create a folder called uploads

got to AWS S3 by searching it in the console

then click on create bucket
give it a unique name
select youyr region
leave evreything as as default for now

copy the name of your bucket

go to IAM by seraching for it, which will be used to make ure that our nodeJS application has the permissions to actually access this bucket and we are gonna do two things here
we will create a policy which will limit our application's access to the bucket
In IAM go to policies and click on create policy, click on choose service and search for S3, then we can select all of the policies that it should have, we will select getObject, putObject, deleteObject, getObjectAttributes, then in resources section click on add ARN, paste the bucketname and in object name put *

click on next tags, then click on next review and then give the policy a name

now we need to create a user acocunt that the nodeJS application will use to login as
under access management go to users
click on add users givce it some arbitrary name
and select access key 
click on next permissions, click on attach policy, click next twice then click on create user

it provides us with access key and the secret access key, which we should save

now in node appliaction ; npm i aws-sdk
