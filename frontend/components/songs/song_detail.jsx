import React from 'react';
import AnnotationContainer from '../annotations/annotation_container';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showStatus: "", startIndex: 0, endIndex: 0,
    lyrics: "", selectedAnnotationId: null, annotationButtonPosition: null,
    showList: false};
    this.showAnnotationButton = this.showAnnotationButton.bind(this);
    this.resetState = this.resetState.bind(this);
    this.processLyrics = this.processLyrics.bind(this);
    this.handleAnnotationClick = this.handleAnnotationClick.bind(this);
    this.setAnnotationStatus = this.setAnnotationStatus.bind(this);

  }

  componentDidMount() {
    this.props.requestOneSong(this.props.params.songId);
    this.props.requestAllAnnotations(this.props.params.songId);
    window.scrollTo(0,0); // scrolls to the bottom?
  }

  handleAnnotationClick(id, e) {
    this.setState({selectedAnnotationId: id, annotationButtonPosition: e.pageY,
    showStatus: "post"});
  }

  getSelectedInfo(selected) {
    let startIndex = selected.anchorOffset;
    let endIndex = selected.focusOffset;
    let parentEl = selected.anchorNode.parentElement;

    if (startIndex > endIndex) { // if user selects backwards
      const temp = startIndex;
      startIndex = endIndex;
      endIndex = temp;
    }

    const selectedText = this.props.song.lyrics.slice(startIndex, endIndex);
    while (parentEl.previousSibling) {
      startIndex += parentEl.previousSibling.innerText.length;
      endIndex += parentEl.previousSibling.innerText.length;
      parentEl = parentEl.previousSibling;
    }

    return ({
      startIndex: startIndex,
      endIndex: endIndex,
      selectedText: selectedText
    });
  }

  resetState() {
    this.setState({showStatus: "", startIndex: 0, endIndex: 0,
    lyrics: "", selectedAnnotationId: null, annotationButtonPosition: null});
  }

  dummyFunction() {

  }

  showAnnotationButton(e) {
    const selection = window.getSelection();
    if (selection.toString().length === 0) {

      this.resetState();
      return; // nothing selected
    }

    if (selection.anchorNode !== selection.focusNode) {
     return; // requires that the highlighting is confined to one node
    }

    const selectedInfo = this.getSelectedInfo(selection);
    const startIndex = selectedInfo.startIndex;
    const endIndex = selectedInfo.endIndex;
    const lyrics = selectedInfo.selectedText;
    const annotationPosition = e.pageY;

    this.setState({ showStatus: "button", startIndex: startIndex, endIndex: endIndex, lyrics: lyrics, annotationButtonPosition: annotationPosition });

  }

  setAnnotationStatus(status) {
    this.setState({showStatus: status});
  }

  processLyrics() {
    const lyrics = this.props.song.lyrics;
    let processedLyrics = [];
    const annotations = this.props.song.annotations;
    annotations.sort(function(a, b){
        return a.start_index-b.start_index;
    }); // sort annotations based on start index

    let startIndex = 0;
    annotations.forEach((annotation) => {
      processedLyrics.push(<span className="not-annotated">{lyrics.slice(startIndex, annotation.start_index)}</span>);

      processedLyrics.push(<span className="annotated"
      onClick={this.handleAnnotationClick.bind(null, annotation.id)}>
      {lyrics.slice(annotation.start_index, annotation.end_index)}</span>);
      startIndex = annotation.end_index;
    });

    processedLyrics.push(<span className="not-annotated">{lyrics.slice(startIndex, lyrics.length)}</span>);
    return processedLyrics ;

  }

  render() {

    if (this.props.song) {
      const annotation =this.props.song.annotations.find( (annotation) => {

        return annotation.id === this.state.selectedAnnotationId;
      }) || {} ;
      return (
        <section className="song-detail-container group">
          <div className="song-banner">
            <img className="zoomed-banner" src={this.props.song.image_url}></img>
            <div className="banner-info">
              <h2 className="song-title">
                {this.props.song.title}</h2>
              <br/>
              <h2 className="song-artist">
                {this.props.song.artist}</h2>
            </div>
            <img className="pro-pic"
              src={this.props.song.image_url}></img>
          </div>

          <section className="lyrics-container">

            <h3 className="lyrics-header">
              {this.props.song.title} lyrics
            </h3>
            <div onMouseUp={this.showAnnotationButton} className="lyrics-text">
              {this.processLyrics()}
            </div>
          </section>

          <section className="annotation-container">
            <AnnotationContainer
              showStatus={this.state.showStatus}
              songId={this.props.song.id}
              lyrics={this.state.lyrics}
              startIndex={this.state.startIndex}
              endIndex={this.state.endIndex}
              annotationButtonPosition={this.state.annotationButtonPosition}
              song={this.props.song}
              selectedAnnotation={annotation}
              setAnnotationStatus={this.setAnnotationStatus}/>
          </section>
        </section>
      );

    } else {
      return (
        <div></div>
      );
    }
  }
}

export default SongDetail;
