begin transaction 

truncate table useraccount

-- ******************************
-- Create new data from source db
-- ******************************
--select 
--' insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values(''' 
--+ REPLACE(username,'''','') + ''',''' + REPLACE(firstname,'''','') + ''',''' + REPLACE(lastname,'''','') + ''',''' + REPLACE(shortbio,'''','"') + ''',''' + picturepath + ''',''' + hashedpassword + ''','''+  emailaddress + ''','''+  '02/08/2016' + ''',0,0,0,0,1,''01/01/1990'',0,0,0,0,'''+ ISNULL(personalid,'') + ''',N'''+  ISNULL(address,'') +  ''','''+  ISNULL(mobilephone,'') + ''',4,1,3,250,4,''02/08/2016'',''02/08/2016'',0, NEWID()); '  
--from useraccount


-- ******************************
-- Data from source db
-- ******************************
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@anonymous','anonymous','guest','','','866d68ba-5b93-4a55-a36a-9389f9977916','anonymoususer@readshorts.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'',N'','',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@chen_rosenberg','chen','rosenberg','Oscar Wilde once said - Be yourself because all the rest are taken. This is the easiest way to become a fish net of materials for writing stories.','','688a0e79-ecd7-40c9-9fdb-8a85711e373c','chenrosen33@gmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'',N'','',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@david_barbi','david','barbi','"I will climb I will climb
On a high mountain
With my legs I"d want
And with my hands on the tree
Until its treetop
And even if not � 
That"s me."','https://www.facebook.com/photo.php?fbid=10150661078653528&set=a.429796518527.201904.635773527&type=3&theater','66b0ee2d-4f00-4066-a703-a9cec0639857','barbi.david@gmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'52127727',N'������ 44 ����� ���','050-570-2230',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@etgar_moyal','etgar','moyal','I have my believes, but I don"t believe it really happens. I don"t believe in me nor him, but I do believe in sleeping.','https://www.facebook.com/photo.php?fbid=10154263399070690&set=a.431655085689.221992.697305689&type=3&theater','9a8e9208-1744-46d9-953a-88f160ea4766','ethgore@gmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'000',N'000','050-756-6698',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@idit_barak','idit','barak','A Mom of three and a poet. My first book, "Until the Sky and Back" is sharing the journey between the earth and the skies, which I"ve edited for years. More of my songs are being published in literal magazines and the social media.','https://www.facebook.com/photo.php?fbid=1117652708262228&set=a.151223711571804.25819.100000525271975&type=3&theater','2bb02e15-648b-4066-b257-6451bcad1b1a','iditbarak1@gmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'59109629',N'������� 9 ����"�','050-213-0400',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@iris_eliya-cohen','iris','eliya-cohen','Hate is love we didn"t want to save - Taken from "Sh"harhort" by Iris Eliya Cohen','https://www.facebook.com/photo.php?fbid=1046997562034471&set=pb.100001727125771.-2207520000.1469284425.&type=3&theater','3553088b-58b8-4f24-a8bc-cc7c08643d1e','iriseliyacohen@hotmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'24184004',N'000','050-471-6602',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@itzik_blank','itzik','blank','I"m really close to crack the secret for successful life. I just need to figure out what"s life.','https://www.facebook.com/photo.php?fbid=785368824862908&set=a.100354260031038.475.100001693921242&type=3&theater','f854de6f-1d30-4f17-95b8-549ef133b3c5','bepita@walla.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'11586609',N'������ 6/1 �����','050-5522221',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@shelly_marcus','shelly','marcus','People think stories are wrote from imagination, while reality creates the most human and best stories you could find. Every place carries a story. All you need to do is open your senses.','https://www.facebook.com/photo.php?fbid=615394455290569&set=a.100355140127839.705.100004600590831&type=3&theater','ccd89dd6-23cb-41a4-9fdc-c83cdd6c3d91','mamarcus77@gmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'34536425',N'����� 30 ���� ���','050-827-1077',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@sigal_iferman','sigal','iferman','Some people go to therapist, some run to alcohol. I choose to write.
A good of wine glass and a close friend never hurt, but only on the paper � I"m myself, with you.','https://www.facebook.com/photo.php?fbid=10207520552145180&set=a.1491278275174.72922.1030513337&type=3&theater','69bd0e14-9f42-4e53-9a8b-2b27a8c4200b','sigali1388@gmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'308157932',N'���� ���� 6/25 �����','054-240-5668',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@tal_cohen-malach','tal','cohen-malach','The freedom to imagine, to feel and to authentically express feelings, black on top of white.','https://www.facebook.com/photo.php?fbid=1623493154604355&set=a.1387509841536022.1073741825.100008310582634&type=3&theater','49830aee-cb38-4a16-ac2e-66c9d2b36f7c','talcomal.naftali@gmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'59194811',N'�����, ���� �����, ���� �����','052-326-7280',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
 insert into useraccount (UserName,FirstName,LastName,ShortBio,PicturePath,HashedPassword,EmailAddress,LastActitiyDate,IsAnonimousConnect,IsFBConnect,IsTWConnect,IsGGLConnect,IsEmailConnect,BirthDate,EmailForShortIMightLike,EmailForShortOfTheWeek,EmailForShortFollowingWriter,EmailForNewSAndUpdates,PersonalId,Address,MobilePhone,LUSubscriptionTypeKey,LUSysInterfacelanguageKey,LUGenderKey,LUCountryKey,LUUserVerificationTypeKey,CreatedTimeStamp,LastUpdateTimeStamp,IsRowDeleted,UniqueGuid) values('@rachely_wollstein','rachely','wollstein','Trying to translate my heart into words','https://dl.dropboxusercontent.com/u/2449147/RacheliW.JPG','569933cf-cc37-4096-b395-2c54cb8e1375','rachely.wollstein@gmail.com','02/08/2016',0,0,0,0,1,'01/01/1990',0,0,0,0,'15110257',N'���� 11 �"�','522452452',4,1,3,250,4,'02/08/2016','02/08/2016',0,newid()); 
select * from useraccount

commit transaction