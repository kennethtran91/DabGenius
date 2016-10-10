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

export const fetchAllAnnotations = (success, error) => {
  $.ajax({
    url: `api/annotations`,
    method: 'GET',
    success,
    error
  });
};
