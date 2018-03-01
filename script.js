/*var movies = [
    {
        title: 'Harry Potter',
        desc: 'film o czarodzieju'
  },
    {
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
  }
];
var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc)
    );
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );*/
var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        roleplay: 'Daniel Radcliffe, Emma Watson, Rupert Grint',


  },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
  },
    {
        id: 3,
        title: 'Królewna Śnieżka',
        desc: 'Film o księżniczce'
  },
];
var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.roleplay),


    );
});
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));
