/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import EnterModuleLoader from "../../Extends/GameLaunch/EnterModuleLoader";

export default class EnterModuleLoaderStruct extends fgui.GComponent
{
	public m_Reconnection : fgui.Controller;
	public m_title : fgui.GTextField;
	public m_help : fgui.GTextField;
	public m_txt_resVer : fgui.GTextField;
	public m_txt_gamever : fgui.GTextField;
	public m_screenBG : ScreenBG;
	public m_progressBar : fgui.GProgressBar;

	
	public static URL:string = "ui://47qsdr42f84s0";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():EnterModuleLoader {
		return <EnterModuleLoader><any>(fgui.UIPackage.createObject("GameLaunch","EnterModuleLoader"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Reconnection = this.getController("Reconnection");

		
		this.m_title = <fgui.GTextField><any>(this.getChild("title"));
		this.m_help = <fgui.GTextField><any>(this.getChild("help"));
		this.m_txt_resVer = <fgui.GTextField><any>(this.getChild("txt_resVer"));
		this.m_txt_gamever = <fgui.GTextField><any>(this.getChild("txt_gamever"));
		this.m_screenBG = <ScreenBG><any>(this.getChild("screenBG"));
		this.m_progressBar = <fgui.GProgressBar><any>(this.getChild("progressBar"));
		
		
	}
}