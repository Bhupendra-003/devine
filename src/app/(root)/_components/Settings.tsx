"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Settings = () => {
    const {
        fontSize,
        setFontSize,
        fontWeight,
        setFontWeight,
        minimap,
        setMinimap,
        scrollBeyondLastLine,
        setScrollBeyondLastLine,
        fontFamily,
        setFontFamily,
        fontLigatures,
        setFontLigatures,
        cursorBlinking,
        setCursorBlinking,
        smoothScrolling,
        setSmoothScrolling,
        contextmenu,
        setContextmenu,
        lineHeight,
        setLineHeight,
        letterSpacing,
        setLetterSpacing,
        roundedSelection,
        setRoundedSelection,
    } = useCodeEditorStore();
    return (
        <div className="max-h-[700px] overflow-y-scroll scrollbar-custom">
            <Card>
                <CardContent className="space-y-6 pt-6">
                    <div className="flex items-center justify-between">
                        <Label>Minimap</Label>
                        <Switch checked={minimap} onCheckedChange={setMinimap} />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label htmlFor="fontSize">Font Size</Label>
                        <Select value={fontSize.toString()} onValueChange={val => setFontSize(Number(val))}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Font Size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="14">14</SelectItem>
                                <SelectItem value="16">16</SelectItem>
                                <SelectItem value="18">18</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="22">22</SelectItem>
                                <SelectItem value="24">24</SelectItem>
                                <SelectItem value="26">26</SelectItem>
                                <SelectItem value="28">28</SelectItem>
                                <SelectItem value="30">30</SelectItem>
                                <SelectItem value="32">32</SelectItem>
                                <SelectItem value="34">34</SelectItem>
                                <SelectItem value="36">36</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex gap-8 items-center justify-between">
                        <Label className="whitespace-nowrap">Font Weight</Label>
                        <Slider
                            value={[fontWeight]}
                            min={100}
                            max={900}
                            step={100}
                            onValueChange={(value: number[]) => setFontWeight(value[0])}
                        />
                        <p>{fontWeight}</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Scroll Beyond Last Line</Label>
                        <Switch checked={scrollBeyondLastLine} onCheckedChange={setScrollBeyondLastLine} />
                    </div>

                    <div className="flex gap-8 items-center justify-between">
                        <Label className="whitespace-nowrap">Font Family</Label>
                        <Input
                            value={fontFamily}
                            onChange={(e) => setFontFamily(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Font Ligatures</Label>
                        <Switch checked={fontLigatures} onCheckedChange={setFontLigatures} />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Cursor Blinking</Label>
                        <Select value={cursorBlinking} onValueChange={setCursorBlinking}>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Cursor Blinking" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="blink">Blink</SelectItem>
                                <SelectItem value="smooth">Smooth</SelectItem>
                                <SelectItem value="phase">Phase</SelectItem>
                                <SelectItem value="expand">Expand</SelectItem>
                                <SelectItem value="solid">Solid</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Smooth Scrolling</Label>
                        <Switch checked={smoothScrolling} onCheckedChange={setSmoothScrolling} />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Context Menu</Label>
                        <Switch checked={contextmenu} onCheckedChange={setContextmenu} />
                    </div>

                    <div className="flex gap-8 items-center justify-between">
                        <Label className="whitespace-nowrap">Line Height</Label>
                        <Input
                            type="number"
                            value={lineHeight}
                            onChange={(e) => setLineHeight(Number(e.target.value))}
                            className="w-24"
                            step="0.1"
                        />
                    </div>

                    <div className="flex gap-8 items-center justify-between">
                        <Label className="whitespace-nowrap">Letter Spacing</Label>
                        <Input
                            type="number"
                            value={letterSpacing}
                            onChange={(e) => setLetterSpacing(Number(e.target.value))}
                            className="w-24"
                            step="0.1"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label>Rounded Selection</Label>
                        <Switch checked={roundedSelection} onCheckedChange={setRoundedSelection} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Settings;
