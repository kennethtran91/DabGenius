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

export const fetchOneAnnotation = (id, success, error) => {
  $.ajax({
    url: `api/annotations/${id}`,
    method: 'GET',
    success,
    error
  });
};
