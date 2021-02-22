import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  total = 0
  book: any
  quantity = new FormControl(1);

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.booksService.getBookById(id)
      .subscribe(
        (book: any) => {
          this.book = book;
          this.total = this.book.unitValue;
        },
        (error) => {
          console.error('Error getting books: ', error)
        }
      )

  }

  validateQuantity() {
    
    if (!this.quantity.value || this.quantity.value == "" ) {
      this.quantity.setValue(1)
    }
    else {
      var total_price = parseInt(this.quantity.value) * this.book.unitValue;
      this.total = total_price;
    }
  }

}
