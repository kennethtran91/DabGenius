import React from 'react';
import AnnotationContainer from '../annotations/annotation_container';
import { hashHistory } from 'react-router';

class SongDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showButton: false, startIndex: 0, endIndex: 0,
    lyrics: "", selectedElement: null, annotationButtonPosition: null,
    showList: false};
    this.showAnnotationButton = this.showAnnotationButton.bind(this);
    this.resetState = this.resetState.bind(this);
    this.hideAnnotationButton = this.hideAnnotationButton.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.processLyrics = this.processLyrics.bind(this);
    this.handleAnnotationClick = this.handleAnnotationClick.bind(this);
    // this.showAnnotation = this.showAnnotation.bind(this);
  }

  componentDidMount() {
    this.props.requestOneSong(this.props.params.songId);
    this.props.requestAllAnnotations(this.props.params.songId);
  }

  hideAnnotationButton(e) {
    this.setState({ showButton: false, selectedElement: null});
  }

  hideButton() {
    this.setState({ showButton: false });
  }

  handleAnnotationClick(annotation) {
    this.setState({selectedElement: annotation});
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
    this.setState({showButton: false, startIndex: 0, endIndex: 0,
    lyrics: "", selectedElement: null, annotationButtonPosition: null});
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

    this.setState({ showButton: true, startIndex: startIndex, endIndex: endIndex,
    lyrics: lyrics, annotationButtonPosition: annotationPosition });
  }

  processLyrics() {
    const processedLyrics = [];
    let className;
    let annotations = this.props.song.annotations;
    if (annotations) {
      annotations.sort(function(a, b){
          return a.start_index-b.start_index;
      }); // sort annotations based on start index

      let currentIndex = 0;
      while (annotations.length > 0 || currentIndex < this.props.song.lyrics.length) {
        const startIndex = annotations[0] && annotations[0].start_index;

        if (startIndex && (currentIndex === startIndex)) {
          className = "annotated";
          const endIndex = annotations[0].end_index;
          const annotatedContent = this.props.song.lyrics.slice(startIndex, endIndex);
          processedLyrics.push({
            content: annotatedContent,
            className: className,
            onClick: this.handleAnnotationClick.bind(null, annotations[0])
           });
           currentIndex = endIndex; // reassign current index
           annotations = annotations.slice(1);

        } else {
          className = "not-annotated";
          let nonAnnotatedContent = "";
          while (currentIndex < (startIndex || this.props.song.lyrics.length)) {
            nonAnnotatedContent += this.props.song.lyrics[currentIndex];
            currentIndex++; // find the next annotation
          }
          processedLyrics.push({content: nonAnnotatedContent,
          className: className, onClick: this.resetState });
        }
      }
    }
    return processedLyrics;
  }

  render() {

    if (this.props.song) {
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
              {this.processLyrics().map((segment, id) => {
                return <span className={segment.className} key={id} onClick={segment.onClick}>
                  {segment.content}
                </span>;
              })}
            </div>
          </section>

          <section className="annotation-container">
            <AnnotationContainer
              show={this.state.showButton}
              hide={this.hideButton}
              songId={this.props.song.id}
              lyrics={this.state.lyrics}
              startIndex={this.state.startIndex}
              endIndex={this.state.endIndex}
              annotationButtonPosition={this.state.annotationButtonPosition}
              currentUser={this.props.currentUser}
              song={this.props.song}
              selectedElement={this.state.selectedElement}/>
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
