import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Home Decors",
    },
    {
      cateImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmBhyOPSehk8QrAQcd-LMR5oDWCP5UjOZuPmJnaIonKRBDAP8FVdWsliHvQ&s",
      cateName: "Pots",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Wall Decors",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Jewellery",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Toys",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Paintings and Art",
    },
    // {
    //   cateImg: "./images/category/cat7.png",
    //   cateName: "Health & Beauty",
    // },
    // {
    //   cateImg: "./images/category/cat8.png",
    //   cateName: "Pets",
    // },
    // {
    //   cateImg: "./images/category/cat9.png",
    //   cateName: "Baby Toys",
    // },
    // {
    //   cateImg: "./images/category/cat10.png",
    //   cateName: "Groceries",
    // },
    // {
    //   cateImg: "./images/category/cat11.png",
    //   cateName: "Books",
    // },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              {/* <img src={value.cateImg} alt='' /> */}
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
