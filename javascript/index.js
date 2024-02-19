
const seats = document.getElementsByClassName('seat');
const applyBtn = document.getElementById('apply-btn');

function setInnerText(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}
let globalCounter = 0;
let selectedSeat = 0;
let leftSit = 40;
let total = 0;
let grandTotal = 0;

for (const seat of seats) {
    seat.addEventListener('click', function (event) {


        document.getElementById('input-field').classList.remove('hidden');
        globalCounter++;
        if (globalCounter > 4) {
            alert('Opps!!! You did fill your specified quota.');
            return;
        }

        
        if (globalCounter === 4) {
            applyBtn.removeAttribute('disabled');

        }

        const phone = document.getElementById('phone');
        phone.addEventListener('keyup', function () {
            const phoneNumber = phone.value;
            if (globalCounter > 0 && phoneNumber) {
                nextBtn.removeAttribute('disabled');
            }
        })

        // add and remove bg-color , pointer-event;
        seat.classList.add('pointer-events-none');
        seat.classList.remove('bg-gray-200');
        seat.classList.add('bg-[#1DD100]');

        // selected sit count;
        selectedSeat++;
        setInnerText('current-seat', selectedSeat);

        // left sit count;
        leftSit = leftSit - 1;
        setInnerText('fixed-seat', leftSit);

        // append the seat information 
        const selectedContainer = document.getElementById('container');

        const seatName = event.target.innerText;
        const className = document.getElementById('economy').innerText;
        const price = parseInt(document.getElementById('ticket-price').innerText);

        const div = document.createElement('div');

        const p1 = document.createElement('p');
        p1.innerText = seatName;

        const p2 = document.createElement('p');
        p2.innerText = className;

        const p3 = document.createElement('p');
        p3.innerText = price;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.classList.add('flex', 'justify-between', 'mt-5');
        selectedContainer.appendChild(div);


        //  calculate the total and grand total price;

        total = total + price;
        setInnerText('total-price', total);

        grandTotal = total;
        setInnerText('grand-total', grandTotal);


    })
}

applyBtn.addEventListener('click', function () {
    const couponCode = document.getElementById('coupon').value;
    
    if (couponCode === 'NEW15') {
        const discount = total * 15 / 100;
        grandTotal = total - discount;
        setInnerText('grand-total', grandTotal);
        document.getElementById('input-field').classList.add('hidden');

        const selectedDiscountContainer = document.getElementById('discount-container');
        const p1 = document.createElement('p');
        p1.innerText = 'Discount Price';

        const p2 = document.createElement('p');
        p2.innerText = 'BDT' + '  ' + discount;

        const div = document.createElement('div');
        div.appendChild(p1);
        div.appendChild(p2);
        selectedDiscountContainer.appendChild(div);
        div.classList.add('flex', 'justify-between', 'mt-5', 'text-black', 'font-medium');

    }
    else if (couponCode === 'Couple 20') {
        const discount = total * 20 / 100;
        grandTotal = total - discount;
        setInnerText('grand-total', grandTotal);
        document.getElementById('input-field').classList.add('hidden');
      

        const selectedDiscountContainer = document.getElementById('discount-container');
        const p1 = document.createElement('p');
        p1.innerText = 'Discount Price';

        const p2 = document.createElement('p');
        p2.innerText = 'BDT' + '  ' + discount;

        const div = document.createElement('div');
        div.appendChild(p1);
        div.appendChild(p2);
        selectedDiscountContainer.appendChild(div);
        div.classList.add('flex', 'justify-between', 'mt-5', 'text-black', 'font-medium');

    } else if (couponCode !== 'NEW15' || couponCode !== 'Couple 20') {
        alert('Please provide the right coupon code. I suggest to you copy and paste the coupon code at the input field.');
    }

})

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function () {
    document.getElementById('modal').classList.remove('hidden')
    my_modal_4.showModal();

})
// continue btn in modal
document.getElementById('continue-btn').addEventListener('click', function () {

    window.location.reload();
})
