
//绑定onclikc方法
<script>
var reg_tel=document.getElementById("reg_tel").value;
var reg_pas1=document.getElementById("reg_pas1").value;
var reg_pas2=document.getElementById("reg_pas2").value;
var sign_tel=document.getElementById("sign_tel").value;
var sign_pas=document.getElementById("sign_pas").value;



   function  register_check(){
	    if(reg_tel== "" || reg_tel == null || reg_tel == undefined){ 
			document.getElementsByName("reg_tel")[0].value="";
            document.getElementsByName("reg_tel")[0].placeholder="请输入手机号码";
			;
    }
	   
	if(!(/^1(3|4|5|7|8)\d{9}$/.test(reg_tel))){ 
        document.getElementsByName("reg_tel")[0].value="";
        document.getElementsByName("reg_tel")[0].placeholder="请输入11位正确格式手机号码";
    }    
	   
	   
		if(reg_pas1== "" || reg_pas1 == null || reg_pas1 == undefined){ 
			document.getElementsByName("reg_pas1")[0].value="";
			document.getElementsByName("reg_pas1")[0].placeholder="请输入密码";
			;
	}   
	 
	 
		if(reg_pas2== "" || reg_pas2 == null || reg_pas2 == undefined){ 
			document.getElementsByName("reg_pas2")[0].value="";
			document.getElementsByName("reg_pas2")[0].placeholder="请输入密码";
			;
	}   
	  
		if(reg_pas2==! "" || reg_pas2 == !null || reg_pas2 == !undefined)||reg_pas1== !"" || reg_pas1 == !null || reg_pas1 == !undefined{ 
				if(reg_pas1== !reg_pas2){ 
					document.getElementsByName("reg_pas2")[0].value="";
					document.getElementsByName("reg_pas2")[0].placeholder="密码不一致，请重新输入";
					;
			}   
			
	}   
	}
	
	
	function  sign_check(){
		if(sign_tel== "" || sign_tel == null || sign_tel == undefined){ 
			document.getElementsByName("sign_tel")[0].value="";
			document.getElementsByName("sign_tel")[0].placeholder="请输入手机号码";
			;
	}
		
		if(sign_pas== "" || sign_pas == null || sign_pas == undefined){ 
			document.getElementsByName("sign_pas")[0].value="";
			document.getElementsByName("sign_pas")[0].placeholder="请输入密码";
			;
	}   
	
	
		
	}   
	
	   
        
    
</script>



var anchors = document.getElementsByTagName('a');
        for(var i = 0; i < anchors.length; i++) {
            var anchor = anchors[i];
            anchor.onclick = function() {
                alert('ho ho ho');
            }
        }

