Den-Demo
==============

Note: Before working on your app you will need to add montage to it.

```
npm install .
```  

note: when updating it is recommanded to **remove the glTF-webgl-viewer from node_modules**, npm doesn't currently update git repo correctly. (to be investigated).

Pre-requisites
---------------

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
-----------------------------------------------

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


Layout
------

The template contains the following files and directories:

* `index.html`
* `package.json` – Describes your app and its dependencies
* `README.markdown` – This readme. Replace the current content with a description of your app
* `ui/` – Directory containing all the UI .reel directories.
  * `main.reel` – The main interface component
* `core/` – Directory containing all core code for your app.
* `node_modules/` – Directory containing all npm packages needed, including Montage. Any packages here must be included as `dependencies` in `package.json` for the Montage require to find them.
* `assets/` – Assets such as global styles and images for your app
* `test/` – Directory containing tests for your app.
  * `all.js` – Module that point the test runner to all your jasmine specs.
* `run-tests.html` – Page to run jasmine tests manually in your browser

Create the following directories if you need them:

* `locale/` – Directory containing localized content.
* `scripts/` – Directory containing other JS libraries. If a library doesn’t support the CommonJS "exports" object it will need to be loaded through a `<script>` tag.
