Create a new directory and navigate to it inside a terminal.

To set up this directory to access Git Lab:
```
git init
git remote add origin https://code.ornl.gov/6tm/ruby_epa_app
git fetch --all
```
To receive all the files in the master branch:
`git pull origin master`

Each developer can have their own branch where they can work independently and automatically merge changes with other branches.

To create a new branch: `git branch <branchname>`
To list all remote branches: `git branch -a`

You'll see that there's a star next to master. That signifies the branch you'll push and pull from.

If you want to push/pull from your personal branch, you want to run:
`git checkout <branchname>`
If you list all remote branches again, you should see a star next to your personal branch.

Once you're ready to push your work to GitLab, navigate to your working  directory in a terminal.

1) `git add -A`

2) `git commit -m "your commit message"`

3) `git push`

Make sure to do all 3 commands each time you want to push your work (I learned this the hard way!)
You can also confirm that you actually pushed by checking the project in a browser [here](https://code.ornl.gov/6tm/ruby_epa_app). It'll post a notification with the latest change and commit message.

When you want to merge changes with another person:
1. Open the project in a browser and click on Merge Requests on the left sidebar.

2. Click the green New merge request at the top, then choose which branches you want to merge. Target branch will be the branch that will receive the changes, source branch will be where it gets the changes from. Please take note of a possible GitLab bug in the card below if you are going to be merging 2 non-master branches.

3. Click Submit merge request and then Merge. Sometimes the changes are too complex for the merge to happen automatically, GitLab will tell you there is a merge conflict. Often it will provide an interface where you can choose which changes are to be retained.

You can also merge from the terminal, but I found it easier in the browser.
