<div align="center">
    <img src="./toturial.png" width="100%" />
</div>

#### <-- =================================== -->

# `Upload From Workspace To Remote Repository`

#### <-- =================================== -->

### -- [1] git status <!-- fetch all the files thats not in the stage -->

### -- [2] git add [filename||*] <!-- upload all the files from the workspace to the local stage -->

### -- [3] git commit -m ["commit-description"] <!-- upload all the files from the local stage to the local Repository -->

### -- [4] git push origin main <!-- push all the files from the local stage to the remote server -->

#### <-- =================== -->

## [In-The-First-Time]

### -- [5] git remote add origin [repository-ssh] <!-- connect my local repository with the remote repository -->

### -- [6] git push -u origin main || git pull origin main -r <!-- get all files from the remote repo to the local repo-->

#### <-- =================== -->

## [Addition-Commands]

### -- git clone [repo-ssh] <!-- Get The All The Files From The Remote Repository To The Workspace Directly -->

### -- git clone -b [branch-name] [repo-ssh] <!-- Get The All The Files From The Remote Repository To The Workspace Directly -->

### -- git reset head [file-name] <!-- Delete Any File From The Local Stage -->

### -- git commit -a ["Description"] <!-- Upload All The Files From The Workspace To The Local Repository Directly -->

### -- git reset [commit-name] <!-- Restore The Files From The Local Repository To The Workspace Directly -->

### -- git diff <!-- Fetch The Different Between The Files In The Remote Repository & The Local Repository  -->

#### <-- =================================== -->

# `Branches`

#### <-- =================================== -->

### -- git branch <!-- fetch all branches -->

### -- git branch [branch-name] <!--  create a new branch -->

### -- git branch -m [branch-name] <!-- change the current branch name -->

### -- git checkout [branch-name] <!-- create / switch to other branch -->

### -- git merge [branch-name] <!-- Merge The Branch name With The Current Branch -->

### -- git branch -d [branch-name] <!-- delete The Branch If Doesn't Have An Edits -->

### -- git branch -D [branch-name] <!-- Force Delete The Branch -->

#### <-- =================================== -->

# `ssh-Key`

#### <-- =================================== -->

### -- ssh-keygen -t rsa -b 4096 -C ["shehabayman365@gmail.com"] <!-- Create A New SSH Key -->

#### <-- =================== -->

## [Public-Key]

### -- Go To Github Website - Settings - SSH And GPG Keys - Click On New SSH Key

### -- Copy The SSH Key That Was Created By The Above Command & Append

### -- Click On Add SSH Key

#### <-- =================== -->

## [Privete-Key]

### -- Go To Gethub Website - Repository - Settings - Deploy Key - Add Deploy Key

### -- Copy The SSH Key That Was Created By The Above Command & Append

### -- Check On The Allow Write Access

### -- Click On Add Key

#### <-- =================================== -->

# `Config`

#### <-- =================================== -->

### -- git config --global -l <!-- Get All Configs -->

### -- git config user.name <!-- Get Username -->

### -- git config user.name ["new-UserName"] <!-- Set Username -->

#### <-- =================================== -->

# `Alias`

#### <-- =================================== -->

### -- git config --global alias.[custome alias] <Aliased-Command> <!-- Just Using With Git Commands -->

#### [Ex] git config --global alias.co ["commit -m"]

#### [Ex] git config --global alias.pm ["push origin main"]

#### <-- =================================== -->

# `Reset-Commets`

#### <-- =================================== -->

### -- git log <!-- Get Log With All Logs -->

<!-- If The Logs Are:
    [1] 5ae0c3f5822dc66471ebeda9ddd5230a6f2ee64a (HEAD -> main, origin/main, origin/HEAD)
    [2] dd35fb12fdcfdd05f6d0a3b4456e374c26f05aaa
    [3] 2ee3c5fef3145c716628506a522cb3ab5861768b
    [4] 796fde76ea0fa8ccb2bde1601e39ab676b991fd6

    And I Want To Delete The First Commit So I Will Using this Command Below
-->

### -- git reset --hard [dd35fb12fdcfdd05f6d0a3b4456e374c26f05aaa] <!-- Using The Second Commit Id To Delete The First Commit -->

### -- git push origin main --force <!-- Upload The New Local Repository On The Remote Repository  -->

#### <-- =================================== -->

# `Tags`

#### <-- =================================== -->

#### [Hint:] => When We Create A New Tag Then Push It On The Repo, We Just Taging The Already Uploaded Files

### -- git tag <!-- Fetch All Tags In The Repository -->

### -- git tag -l [v1.*] <!-- Return List With All The Version 1 Tags -->

### -- git tag -d [tag-version] <!-- Delete The Tag From The Local Repository -->

### -- git push origin --delete [tag-version] <!-- Delete The Tag From The Remote Repository -->

#### <-- =================== -->

## [Light-Weight-Tag] <!-- Get The Tag Description From The Last Commit On The Remote Repository -->

### -- git tag [Tag-version] <!-- Create A New Tag -->

### -- git push origin [Tag-version||*] <!-- Upload The Tag On The Remote Repository -->

#### <-- =================== -->

## [Annotated-Tag] <!-- Get The Tag Description Manually -->

### -- git tag -a [tag-version] -m [Description] <!-- Create A New Tag -->

### -- git push origin [tag-version||*] <!-- Upload The Tag On The Remote Repository -->
