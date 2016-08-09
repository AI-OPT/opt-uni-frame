package com.ai.opt.uniframe.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/demo")
public class DemoPageController {
	private static final Log LOG = LogFactory.getLog(DemoPageController.class);
	/**
	 * 系统id
	 */
	public static final String SYSTEM_ID = "RUNNER-CLC-WEB";
    /**
     * 预览模板
     * 
     * @param path
     * @return
     * @author zhangchao
     */
    @RequestMapping("/home")
    public ModelAndView view(String path) {
        return new ModelAndView("/demo/frame");
    }
    
    @RequestMapping("/demopage")
    public ModelAndView viewclc() {
        return new ModelAndView("/demo/demopage");
    }
    

}
