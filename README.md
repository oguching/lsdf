# lsdf

lsdf is command line tool to list files in a directory.

**That's what ls does, genius.**

Yes but ls forces me to know the filename and extension. I don't care what the extension is, I just want to know if this file I'm searching for exists or not.

**You need a whole tool just for that?**

So I create lots of files to test things out and checking to see if the file I want to create exists already is something I do a lot. I do it enough times for it to be annoying that is why lsdf exists.

**You mean no one else has come up with this problem?**

I did a search and didn't really find what I wanted. Most tools try to replicate the functionality of ls. I don't need that, I just need a quick check, file exists? No? Great. Thanks.

**Fine, fine. What's with the name?**

Initially I wanted lsd :) but it was already taken :( lsf didn't look cool enough. I also thought to you_ma. Mandarin you means have, ma means ? but lsdf was faster to type and more importantly available.


**Usage**

To install globally, Run
```
$ npm install -g lsdf
```

To list files in the current directory with name: readme, type
```
$ lsdf readme
```
If there are multiple files with the same name it lists them all with their extensions. If no files exists, it does nothing.

You can also list files in any directory by passing the -d flag followed by the path:
```
$ lsdf package -d ..
```
This will search for package in the directory one level above the current directory where the command is run.

## License
The MIT License (MIT)
