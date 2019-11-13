package edu.swjtuhc.demo.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.swjtuhc.demo.model.SysUser;
import edu.swjtuhc.demo.service.UserService;


//JSON格式
//RESTful风格


@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	
	@RequestMapping("/getAll")
	public List<SysUser> getAll(){
		return userService.getAllUsers();
	}
//	@RequestMapping(name="/create",method = RequestMethod.POST)
//	public list create(){
//		SysUser user =new SysUser();
//		user.setName("123");
//		List.add(user);
//		return list ;
//	}
	
}
