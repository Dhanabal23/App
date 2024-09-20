// FAQ Accordian

 document.addEventListener('DOMContentLoaded',()=>{
    const faqContainer = document.querySelector('.faq-content');
    
    faqContainer.addEventListener('click',(e)=>{
     const groupHeader = e.target.closest('.faq-group-header');
     
     if(!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupbody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');
    

    // Toggle
    icon.classList.toggle('fa-plus');  
    icon.classList.toggle('fa-minus');

    // Toggle visibility Body
    groupbody.classList.toggle('open');

    // close other FAQ open bodies

    const otherGroups = faqContainer.querySelectorAll('.faq-group');

    otherGroups.forEach((otherGroup)=>{
        if(otherGroup!==group){
            otherGroupBody =otherGroup.querySelector('.faq-group-body');
            otherIcon = otherGroup.querySelector('.faq-group-header i');

            otherGroupBody.classList.remove('open');
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');
        }
    })
    });
});


// Mobile menu

document.addEventListener('DOMContentLoaded',()=>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click',()=>{

        mobileMenu.classList.toggle('active');
    });
});