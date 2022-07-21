import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookForm= new FormGroup({
    id:new FormControl(''),
    title:new FormControl(''),
    author:new FormControl(''),
    description:new FormControl('')
  })

  constructor(private bookService:BookService,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param:ParamMap)=>{
      this.bookService.findById(param.get('id')).subscribe(data=>{
        this.bookForm.setValue(data)
      })
    })
  }

  save(){const obj =this.bookForm.value
    this.bookService.update(obj.id,obj).subscribe(()=>{
      alert('thanhcong')
    })

  }


}
