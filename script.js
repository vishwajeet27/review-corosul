let rev =0;
corousel(rev);

function previousReview(){
    rev = rev-1;
    corousel(rev);
}
function nextReview(){
    rev= rev+1;
    corousel(rev);
}

function corousel(review){
    let reviews = document.getElementsByClassName("review__items")
    console.log(reviews.length)
    
    if(review >= reviews.length){
        review = 0;
        rev=0;
    }
    if(review<0){
        review = reviews.length-1;
        rev= reviews.length-1;
    }
    for(let i=0; i< reviews.length; i++){
        reviews[i].style.display = "none";
        
    }
    console.log(review)
    console.log(rev)
    reviews[review].style.display = "block";

}