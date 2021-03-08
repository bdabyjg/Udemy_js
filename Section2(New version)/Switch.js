

const  day = 'monday';

switch (day){
    case 'monday':
        console.log('Plan');
        console.log('Go to coding meetup');
        break;

    case'tuesday':
        console.log('Prepare');
        break;
    case 'Wednesday':
    case 'thursday':
        console.log('Write');
        break
    case 'friday':
        console.log('Record');
        break
    case 'saturday':
    case'sunday':
        console.log('enjoy')
        break;
    default:
        console.log(('Not a valid day!'))
}