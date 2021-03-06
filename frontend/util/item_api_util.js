export const fetchAllItems = (category) => (
    $.ajax({
      method: 'GET',
      url: `api/items?category=${category}`
    })
);
  
export const fetchSingleItem = id => (
  $.ajax({
    method: 'GET',
    url: `api/items/${id}`
  })
);