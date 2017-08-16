
    
    document.addEventListener('scroll', () => {
        
        //Sticky menu
        var scroll = window.pageYOffset, 
            menu = document.getElementById('back_color')
            
        
        if(scroll > 300) {
            menu.classList.add('fixed')
        } else {
            menu.classList.remove('fixed')
        }
    
    })
    
    
    //VALIDAR CONTACTOS
    var enviar =  () => {
        
        var name = document.getElementById('name'),
            last_name = document.getElementById('last_name'),
            email = document.getElementById('email'),
            text_area = document.getElementById('text_area'),
            box_name = document.getElementById('Help_box_name'),
            box_lastname = document.getElementById('Help_box_lastname'),
            box_email = document.getElementById('Help_box_email'),
            box_textarea = document.getElementById('Help_box_textarea'),
            email_regex = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/
        
        //NOMBRE
        if(name.value == null || name.value == '') 
        {
            box_name.style.display = 'block'
            box_name.classList.add('toolkit')
            box_name.textContent = 'Coloca tu Nombre'
            return false
        } 
        else if(name.value.length < 4) 
        {
            box_name.style.display = 'block'
            box_name.classList.add('toolkit')
            box_name.textContent = `El nombre ${name.value} es muy corto`
            return false
        }
        else if(last_name.value == null || last_name.value == '') 
        {
            box_lastname.style.display = 'block'
            box_lastname.classList.add('toolkit')
            box_lastname.textContent = 'Coloca tu Apellido'
            return false
        } 
        else if(last_name.length < 4 )
        {
            box_lastname.style.display = 'block'
            box_lastname.classList.add('toolkit')
            box_lastname.textContent = `El apellido ${last_name.value} es muy corto`
            return false 
        }
        else if(!email_regex.test(email.value)) 
        {
            box_email.style.display = 'block'
            box_email.classList.add('toolkit')
            box_email.textContent = `La dirección de email: ${email.value} no es válida`
            return false
        }
        else if(text_area.value == null || text_area.value == '' || text_area.value.length < 4 )
        {
            return false
        }
        else
        {
            return true
        }
        
    }
