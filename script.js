
let a = 0;
let add = document.getElementById('add');

add.addEventListener('click', () => {

    document.querySelector('.saved').style.display = 'inline-flex';
    let t = document.getElementById('t').value;
    let m = document.getElementById('m').value;
    console.log(t, m);

    if(a==0)
    {
        document.getElementById('b1').style.display='block';
        document.getElementById('t1').value= t ;
        document.getElementById('m1').value= m ;
        document.getElementById('t').value = null;
        document.getElementById('m').value = null;
        return a++;
    }
    else if(a==1)
    {
        document.getElementById('b2').style.display='block';
        document.getElementById('t2').value= t ;
        document.getElementById('m2').value= m ;
        document.getElementById('t').value = null;
        document.getElementById('m').value = null;
        return a++;
    }
    else if(a==2)
    {
        document.getElementById('b3').style.display='block';
        document.getElementById('t3').value= t ;
        document.getElementById('m3').value= m ;
        document.getElementById('t').value = null;
        document.getElementById('m').value = null;
        return a++;
    }
    else if(a==3)
    {
        document.getElementById('b4').style.display='block';
        document.getElementById('t4').value= t ;
        document.getElementById('m4').value= m ;
        document.getElementById('t').value = null;
        document.getElementById('m').value = null;
        return a++;
    }
    else
    {
        return a=0;
    }

});