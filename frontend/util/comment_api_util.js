export const fetchAllComments = (id, success, error) => {
  $.ajax({
    url: `api/annotations/${id}/comments`,
    method: 'GET',
    success,
    error
  });
};

export const createComment = (comment, success, error) => {
  $.ajax({
    url: `api/annotations/${comment.annotation_id}/comments`,
    method: 'POST',
    success,
    error
  });
};
