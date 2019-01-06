var movies = [
    {
      name:"Planet Earth II",
      IMDB:9.5,
      year:2016,
      thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      name:"Band of Brothers",
      IMDB:9.5,
      year:2001,
      thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      name:"Planet Earth",
      IMDB:9.4,
      year:2006,
      thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      name:"Game of Thrones",
      IMDB:9.4,
      year:2011,
      thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    },
    {
      name:"Breaking Bad",
      IMDB:9.4,
      year:2008,
      thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BZDNhNzhkNDctOTlmOS00NWNmLWEyODQtNWMxM2UzYmJiNGMyXkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UY268_CR4,0,182,268_AL_.jpg"
    },
    {
      IMDB:4.9,
      year:2017,
      thumb:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4MDQ4NTM2N15BMl5BanBnXkFtZTgwNDM1NTIzMzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    }
  ];

  var handler = function(){

    var $moviesList = $('#movies-list'), 
        $newList;

      if( movies ){
        $newList = $('<ul>');


        function addStars( starCount){

            var stars =[],highlited;

            for( var c = 1; c <= 10; c++){

                highlited = ( c <= Math.trunc( starCount ) ) ? 'highlight' : '';

                stars.push("<i class='fa fa-star-o " + highlited + "'></i>");
            }

           return stars.join("");   
        }

        movies.forEach(function( movie, index ){
            var $newMovie = $('<li>'),
                name,
                $thumbnail,
                $nameLabel,
                $imdb,
                $year, $likeBtn;

            name = movie.hasOwnProperty('name') ? movie.name : "--movie--";

            if( movie.hasOwnProperty('thumb') ){
                
                $thumbnail = $('<img>')
                                    .attr({
                                        src:movie.thumb,
                                        alt:movie.name
                                    })
                                    .css({
                                        height:200,
                                        width:'auto'
                                    })
                                    .addClass('thumbnail');


                $newMovie.prepend( $thumbnail );
            }

            if( name ){
                $nameLabel = $('<h4>').text(  name );

                $newMovie.append( $nameLabel );
            }

            if( movie.hasOwnProperty('IMDB') ){
                $imdb =  $('<h5>').text('IMDB: ' + movie.IMDB );
                $newMovie.append( $imdb );
            }

            $newMovie.append( addStars( movie.IMDB ) );

            if( movie.hasOwnProperty('year') ){
                $year =  $('<h5>').text('year: ' + movie.year );
                $newMovie.append( $year );
            }

            $likeBtn = $('<button>')
                .addClass('like')
                .text('Like!')
                .bind('click', function(){
                    var $this = $(this);
                    $this.toggleClass('active');
                });

            $newMovie.append( $likeBtn );

            $newList.append( $newMovie );
        });

        $moviesList.append( $newList );
      }
       
  };

  jQuery( document ).ready( handler );
