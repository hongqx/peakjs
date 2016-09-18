/**
 * WAVEFORM.SEGMENTS.JS
 *
 * This module handles all functionality related to the adding,
 * removing and manipulation of segments
 */
define([
  "peaks/markers/shapes/base",
  "peaks/waveform/waveform.mixins",
  "konva"
], function (BaseShape, mixins, Konva) {
  'use strict';

  var WaveShape = Object.create(BaseShape.prototype);

  /**
   *
   * @param segmentData
   * @param view
   * @returns {Konva.Rect}
   */
  WaveShape.createShape = function createShape(segmentData, view){
    var shape = new Konva.Rect({
      fill: segmentData.color,
      strokeWidth: 0,
      y: 0,
      x: 0,
      width: 0,
      height: view.height,
      opacity:0.4
    });
    return shape
    /*var group = new Konva.Group({});
    var shape = new Konva.Rect({
      fill: segmentData.color,
      strokeWidth: 0,
      y: 0,
      x: 0,
      width: 0,
      height: view.height,
      opacity:0.4
    });
    var line1 = new Konva.Line({
        points: [0.5, 0, 0.5, view.height],
        strokeWidth: 1,
        stroke: "blue",
        x: 0,
        y: 0
    });
    var line2 = new Konva.Line({
        points: [0.5, 0, 0.5, view.height],
        strokeWidth: 1,
        stroke: "red",
        x: 0,
        y: 0
    });
    group.add(shape);
    group.add(line1);
    group.add(line2);
    return group;*/
  };

  /**
   *
   * @param {WaveformData} waveform
   * @param {Canvas} canvas
   * @param {interpolateHeight} y
   */
  WaveShape.update = function updateRectShape(view, segmentId){
    var waveformData = view.data;

    if (waveformData.segments[segmentId] === undefined){
      return;
    }

    var segment = waveformData.segments[segmentId];
    var offset_length = segment.offset_length;
    var offset_start = segment.offset_start - waveformData.offset_start;

    this.setAttrs({
      x: offset_start,
      width: offset_length
    });
  };

  return WaveShape;
});
