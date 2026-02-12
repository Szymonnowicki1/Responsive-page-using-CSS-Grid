fetch("./data.json")
.then(response => response.json())
.then(data =>{
    const title1 = document.querySelectorAll(".title")

    data.forEach((item,index)=> {
        title1[index].textContent=item.title
    })


  const daily = document.querySelector(".daily")
  const weekly = document.querySelector(".weekly")
  const monthly = document.querySelector(".monthly")
  const hour = document.querySelectorAll(".hour")
  const last = document.querySelectorAll(".last")
  const button = document.querySelectorAll(".threeRow div")

    const setActive = (e) => {
      button.forEach(item => {
        item.classList.remove("active")
      })
      e.classList.add("active")
    
    }
  const dailyNumbers = () => {
    setActive(daily)
    
    data.forEach((item,index) => {
        hour[index].textContent = item.timeframes.daily.current + "hrs"
        last[index].textContent = `Last Week - ${item.timeframes.daily.previous}hrs`
    })
  }
  daily.addEventListener("click",dailyNumbers)

  const weeklyNumbers = () => {
    setActive(weekly)

    data.forEach((item,index) => {
        hour[index].textContent = item.timeframes.weekly.current + "hrs"
        last[index].textContent = `Last Week - ${item.timeframes.weekly.previous}hrs`
    })
  }

  weekly.addEventListener("click",weeklyNumbers)

  const monthlyNumbers = () => {
    setActive(monthly)
    
    data.forEach((item,index) => {
        hour[index].textContent = item.timeframes.monthly.current + "hrs"
        last[index].textContent = `Last Week - ${item.timeframes.monthly.previous}hrs`
    })
  }

  monthly.addEventListener("click",monthlyNumbers)

dailyNumbers()

})
  .catch(error => console.error('Błąd przy pobieraniu JSON:', error));


