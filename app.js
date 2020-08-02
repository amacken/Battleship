console.log('test')
console.log($)

$(() => {
    const playerOneList = [];

    const playerTwoList = [];

    const renderOne = (arr) => {
        const $ulOne = $('.theList');
        for(let item of arr) {
            const $liOne = $('<li class="listOne">');

            $('#playerOnePicks' > 'h4' > playerOneList).addClass('theList')
            $liOne.text(item);
            $liOne.appendTo('#playerOnePicks');
        }
    }

    $(() => {
        $('form').on('submit', (event) => {
            const inputValue = $('#input-box').val();
            playerOneList.push(inputValue)
            event.preventDefault();
            $(event.currentTarget).trigger('reset');
            renderOne(playerOneList)
        })
    })

    

})
