
$( document ).ready(function() 
{
    $('.seat').click(function () 
    {
        if ($(this).hasClass('checked'))
        {
            $(this).removeClass('checked');
        }
        
        else 
        {
            $(this).addClass('checked');
        }

        if($(this).hasClass('checked')) 
        {
            if($('.seat.checked').attr('zone') != $(this).attr('zone') )
            {
                alert('Vui lòng chọn tất cả ghế cùng loại');
                $(this).removeClass('checked');
            }
        }

    })
});

