  
            function startTime()     
            {   
			    var phase;
                var today=new Date();//�������ڶ���     
                var yyyy = today.getFullYear();//ͨ�����ڶ����getFullYear()����������      
                var MM = today.getMonth()+1;//ͨ�����ڶ����getMonth()������������     
                var dd = today.getDate();//ͨ�����ڶ����getDate()������������       
                var hh=today.getHours();//ͨ�����ڶ����getHours��������Сʱ     
                var mm=today.getMinutes();//ͨ�����ڶ����getMinutes�������ط���     
                var ss=today.getSeconds();//ͨ�����ڶ����getSeconds����������     
                // ������ӻ�Сʱ��ֵС��10��������ֵǰ��0���������ʱ��������3��20��9��Ļ�������ʾ15��20��09     
                MM=checkTime(MM);  
                dd=checkTime(dd);  
                mm=checkTime(mm);     
                ss=checkTime(ss);      
                var day; //���ڱ������ڣ�getDay()�����õ����ڱ�ţ�  
                if(today.getDay()==0)   day   =   "Sunday " ;  
                if(today.getDay()==1)   day   =   "Monday " ;  
                if(today.getDay()==2)   day   =   "Tuesday " ; 
                if(today.getDay()==3)   day   =   "Wednesday " ;  
                if(today.getDay()==4)   day   =   "Thursday " ;  
                if(today.getDay()==5)   day   =   "Friday " ; 
                if(today.getDay()==6)   day   =   "Saturday " ; 
                
				if(hh>=5&&hh<12){
		             phase= "Good morning!";
		         }
		        else if(hh>=12&&hh<18){
		             phase= "Good afternoon!";
		           }
		        else{
		             phase= "Good evening!";
		           }
				document.getElementById('nowDateTimeSpan').innerHTML=yyyy+"-"+MM +"-"+ dd +" " + hh+":"+mm+":"+ss+"   " + day +"   "+phase;     
                setTimeout('startTime()',1000);//ÿһ�������¼���startTime()����  
            }     

            function checkTime(i)     
            {     
                if (i<10){  
                    i="0" + i;  
                }     
                  return i;  
            }   

          setInterval(setTimer,1000);