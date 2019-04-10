    document.getElementById('btn_scan').addEventListener('click', takephoto);

    function takephoto () {
        alert("Taking photo");
        let opts = {
            quality: 80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetWidth: 300,
            targetHeight: 400
        };

        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    }
    ftw: function (imgURI) {
        document.getElementById('msg').textContent = imgURI;
        document.getElementById('photo').src = imgURI;

    }
    wtf: function (msg) {
        document.getElementById('msg').textContent = msg;
    }