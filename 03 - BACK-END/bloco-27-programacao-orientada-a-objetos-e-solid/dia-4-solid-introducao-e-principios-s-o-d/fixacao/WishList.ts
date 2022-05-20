type Book = {
  book: string;
  author: string;
  genre: string;
}

class WishList {
  constructor(private wishlist: Book[] = []) {
    this.wishlist = wishlist;
  }
  
  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const wishlist = new WishList([]);

wishlist.addToWishlist({
  book: 'The Road',
  author: 'Cormac McCarthy',
  genre: 'Dystopia',
});
wishlist.showWishlist();

export default WishList;
