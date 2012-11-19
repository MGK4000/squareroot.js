SQR.DOMElement3D = function(element) {

    this.element = element;

    this.setBackfaceVisibility = function(visible) {
        var p = (visible) ? 'visible' : 'hidden';
        element.style['backface-visibility'] = p;
        element.style['-webkit-backface-visibility'] = p;
        element.style['-moz-backface-visibility'] = p;
        element.style['-o-backface-visibility'] = p;
    }

    this.draw = function(transform, uniforms) {

        var t3d = SQR.DOMUtil.translate3dCss;
        var p = t3d(0, 0, uniforms.cssDistance) + transform.globalMatrix.getAsCSSProperty();

        element.style.zIndex = uniforms.depth;
        element.style['transform'] = p;
        element.style['-webkit-transform'] = p;
        element.style['-moz-transform'] = p;
        element.style['-o-transform'] = p;
    }

}