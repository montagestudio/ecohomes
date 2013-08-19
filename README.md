Den-Demo
========

This demo showcaes the ease of development of a Montage application by leveraging components, bindings, listeners,
and the declarative approach and toolset promoted by Montage. It is intended for public distribution; though the
history will be truncated prior to posting. Regardless, please keep confidential information to a minimum.

Installation
------------

1. Install nodejs (http://nodejs.org)
2. After cloning this repository, `cd den-demo`
3. Run `npm install`
4. Browse to your clone as served by your local system e.g. http://localhost:8081/den-demo
5. Throughout the course of development run `npm update` to fetch the latest dependencies

NOTE: Prior to running `npm update` **remove glTF-webgl-viewer from node_modules**, (`rm -rf node_modules/gltf-webgli-viewer`

Contributing
------------
- Run `jshint` on your code to ensure it conforms to Filament standards

- Make sure all commit messages follow the 50 character subject/72 character
body [formatting used throughout git](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) 

- Make sure commit messages start with uppercase present tense commands
e.g. Prefer "Clear selection when clicking new button" over
"Cleared selection when clicking new button"

- When adding or updating dependencies list the EXACT version of the dependency
to minimize differences when building at different times.
i.e. treat package.json as a shrinkwrapped dependency specifier

3D Components and Objects
-------------------------

The following points about 3D do not cover - yet - `Scene` and `View`.
Please ping @fabrobinet if needed.

Assigning a viewPoint
---------------------

A viewPoint is a node that contains a camera.  
Just like any other node in the scene a viewpoint has transform that is potentially a target for an animation.  

For example you can create & configure a viewPoint named "viewPoint0" - either in lumiere or by adding this serialization:

```
        "viewPoint0": {
            "prototype": "glTF-webgl-viewer/runtime/node",
            "properties": {
                "id": "node-camera001",
                "scene": {"@": "scene1"}
            }
        },
```

In this example:
* `id` refers to the id of a `Node` the glTF file 
* `scene` points to the `Scene` object

Then this viewPoint is referred by a `View` as in:

```
        "view": {
            "prototype": "glTF-webgl-viewer/ui/view.reel",
            "properties": {
                "element": {"#": "colladaView"},
                "height": "768",
                "scene": {"@": "scene1"},
                "viewPoint": {"@": "viewPoint0"},
                "width": "674"
            }
        },
```

Dealing with viewPoints in the "loft" 3d scene
----------------------------------------------

First of all, to get an idea of where are located the nodes that contains a camera (i.e viewpoints) you can look at the glTF file, as in :

```
        "node-Camera": {
            "camera": "camera_6",
            "name": "Camera",
            "rotation": [
                0.676486,
                0.390273,
                0.624542,
                1.49155
            ],
            "scale": [
                1,
                1,
                1
            ],
            "translation": [
                70.9776,
                -22.4153,
                50.3661
            ]
        },
        "node-LookAtBar": {
            "camera": "camera_5",
            "children": [],
            "name": "LookAtBar",
            "rotation": [
                -0.168108,
                0.559335,
                0.811717,
                3.62017
            ],
            "scale": [
                1,
                1,
                1
            ],
            "translation": [
                95.5895,
                -193.301,
                82.9342
            ]
        },
```

and so on...  

At the time of writing this, the viewPoints for the "ride", i.e the animated ones are: `node-camera001`, `node-camera002`, `node-camera003`

The viewpoints without animation, just to "look at" a point of interest are:
`node-LookAtBar`, `node-LookAtBooks`, `node-LookAtFridge`, `node-LookAtLivingRoom`, `node-LookAtStairs`, `node-LookAtWindow`, 

The recommanded way to go to a static viewPoint is to:
* set the viewPoint on the view
* call the `pause` action on the view

Then to resume the ride:
* set the viewPoint with `node-camera001` on the view
* call the `play` action on the view
