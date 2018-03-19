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
var movies = [{
        id: 1,
        img: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/bd/7xmtxRc9nQnCuWINuTT4SMP5NJc.jpg/revision/latest/scale-to-width-down/333?cb=20130803164345',
        title: 'Harry Potter',
        desc: 'film o czarodzieju'
    },
    {
        id: 2,
        img: 'http://moviesroom.pl/images/0.Aktualizacja_listopad/Dude%C5%82e/kr%C3%B3l_lew.jpg',
        title: 'Król Lew',
        desc: 'Film o królu sawanny'
    },
    {
        id: 3,
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/NightmareOnElmStreetBoxSetSide.jpg/225px-NightmareOnElmStreetBoxSetSide.jpg',
        title: 'Koszmar z ulicy Wiązów',
        desc: 'Koszmar z ulicy Wiązów – amerykański film fabularny, horror z 1984 w reżyserii Wesa Cravena. Pierwszy film ze słynnej serii slasherów, których negatywnym bohaterem jest mroczny Freddy Krueger.'
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('img', {
            src: movie.img
        }),
        React.createElement('p', {}, movie.desc)
    );
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);
ReactDOM.render(element, document.getElementById('app'));
