/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Disable right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    // Show the warning pane
    $('#rightClickWarning').fadeIn(200);
    // Hide the warning pane after 3 seconds
    setTimeout(function(){
        $('#rightClickWarning').fadeOut(200);
    }, 3000);
});

// smooth scroll
$(document).ready(function(){
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });

    // Image zoom
    $(".zoom-button").on('click', function(event) {
        event.preventDefault();
        // Get the source of the image associated with the clicked zoom button
        var imgSrc = $(this).closest('.img-wrapper').find('img').attr('src');
        // Create modal markup
        var modalMarkup = `
            <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${imgSrc}" class="img-fluid modal-img" alt="Zoomed Image">
                        </div>
                    </div>
                </div>
            </div>
        `;

	    var description = $(this).closest('.img-wrapper').find('h5').text();
	    // Update the modal body with the new image source and description
	    $('#imageModal .modal-body img').attr('src', imgSrc);
	    $('#imageModal .modal-body .image-description').text(description);
        // Remove any existing modals
        $('.modal').remove();
        // Append modal markup to body
        $('body').append(modalMarkup);
        // Show modal
        $('#imageModal').modal('show');
        // Close modal when close button is clicked
        $('.modal-header .btn-close').on('click', function() {
            $('#imageModal').modal('hide');
        });
    });

});
