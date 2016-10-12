export const createAnnotation = (annotation, success, error) => {
  $.ajax({
    url: "api/annotations",
    method: "POST",
    data: {annotation: annotation},
    success,
    error
  });
};

export const deleteAnnotation = (id, success, error) => {
  $.ajax({
    url: `api/annotations/${id}`,
    method: "DELETE",
    success,
    error
  });
};

export const fetchAllAnnotations = (id, success, error) => {
  $.ajax({
    url: `api/songs/${id}/annotations`,
    method: 'GET',
    success,
    error
  });
};

export const upvoteAnnotation = (id, success, error) => {
  $.ajax({
    url: `api/annotations/${id}/upvote`,
    method: 'POST',
    success,
    error
  });
};

export const downvoteAnnotation = (id, success, error) => {
  $.ajax({
    url: `api/annotations/${id}/downvote`,
    method: 'POST',
    success,
    error
  });
};
